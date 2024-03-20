const Student = require("../models/AppSchemas/Student");
const HttpError = require("../models/HttpError/ErrorModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.registerStudent = async (req, res, next) => {
  try {
    console.log("Corps de la requette : ");
    console.log(req.body);
    const { firstname, lastname, email, password, password2, profilePicture } =
      req.body;
    if (!firstname.trim() || !lastname.trim() || !email.trim() || !password) {
      console.log("firstname : ");
      console.log(firstname);
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent , catch(registerUser !)",
          422
        )
      );
    }
    const newMail = email.toLowerCase();
    const emailExists = await Student.findOne({ email: newMail });
    if (emailExists) {
      return next(
        new HttpError(
          "Cet email est déja utilisé par un autre étudiant ! catch(registerStudent)"
        )
      );
    }
    if (password.trim().length < 12) {
      return next(
        new HttpError(
          "Mot de passe faible, le mot de passe doit contenir au moins 12 caractéres non vides ! ",
          422
        )
      );
    }
    if (password != password2) {
      return next(
        new HttpError("Les Mots de passe ne sont pas identiques !", 422)
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    let newStudent;
    if (profilePicture) {
      newStudent = await Student.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
        profilePicture: profilePicture,
      });
    } else {
      newStudent = await Student.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
      });
    }
    res.status(201).json(`Etudiant ${newStudent.email} Ajouté`);
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        "Inscription de l'etudiant a echoué , catch(registerStudent)",
        422
      )
    );
  }
};
exports.loginStudent = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new HttpError(
          "Veuillez insérer les champs nécéssaires à la connexion , (loginStudent)",
          422
        )
      );
    }
    const newEmail = email.toLowerCase();
    const student = await Student.findOne({ email: newEmail });
    if (!student) {
      return next(
        new HttpError(
          "L'email entré ne convient aucune ressource existante !",
          422
        )
      );
    }
    const comparePass = await bcrypt.compare(password, student.password);
    if (!comparePass) {
      return next(new HttpError("Mot de passe incorrecte !", 422));
    }
    // login réussie : GENERAION D'UN TOKEN :
    const { _id: id, firstName, lastName } = student; // : ici est "as"
    const fullName = firstName + " " + lastName;
    const token = jwt.sign(
      { id, fullName, entity: "student" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ token, id, fullName, entity: "Etudiant" });
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        "Une erreur imprévu est survenue lors de cette tentative à la connexion, reprenez le plus tot possible !"
      ),
      422
    );
  }
};
exports.getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).select("-password");
    if (!student) {
      return next(new HttpError("Ressource introuvable !", 404));
    }
    res.status(200).json(student);
  } catch (error) {
    return next(new HttpError(error, 500));
  }
};
