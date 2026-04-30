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
        type: [String],
        required: true,
        default : ["https://img.icons8.com/?size=100&id=98957&format=png&color=000000"]
    },  
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
