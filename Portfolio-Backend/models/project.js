import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required: true,
    },
    ProjectDescription: {
        type: String,
        required: true,
    },
    ProjectLinks: {
        gitHubLink: { 
            frontEnd: { 
                type: String 
            },
            backEnd: { 
                type: String 
            },
        },
        liveLink: { 
            type: String 
        },
    },
    ProjectImage: {
        type: String,
    },  
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
