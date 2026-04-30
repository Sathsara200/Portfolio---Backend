import Project from "../models/project.js";

export function addProject(req,res){
    const data = req.body;

    const newProject = new Project(data);

    newProject
        .save()
        .then(() => {
            res.json({message: "Project added successfully"});
        })
        .catch((error) => {
            res.status(500).json({error: "Project addition failed"});
        })
}

export function getProjects(req,res){
    Project.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((error) => {
            res.status(500).json({error: "Failed to fetch projects"});
        })
}

export function updateProject(req,res){
    const data = req.body;

    Project.updateOne({
        _id : data._id,
    },data)
        .then(() => {
            res.json({message: "Project updated successfully"});
        })
        .catch((error) => {
            res.status(500).json({error: "Project update failed"});
        })
}

export function deleteProject(req,res){
    const data = req.body;

    Project.deleteOne({
        _id : data._id,
    })
        .then(() => {
            res.json({message: "Project deleted successfully"});
        })
        .catch((error) => {
            res.status(500).json({error: "Project deletion failed"});
        })
}