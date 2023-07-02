export default function validation(inputs) {
    let error = {};
    let regexName = /^[a-zA-Z\s]{4,}$/g;

    if(inputs.duration && inputs.duration <= 0) error.duration = "The time can't be negative or 0";
    else if(inputs.duration > 24) error.duration = "A tourist activity can not last more then 24 hours";
    
    if(inputs.name && inputs.name === "") error.name = "A tourist activity must have a name";
    else if(!regexName.test(inputs.name)) error.name = "This isn't a valid name for a tourist activity";

    if(inputs.difficulty && inputs.difficulty === 0) error.difficulty = "Please select a difficulty";
    
    if(inputs.season && inputs.season === "") error.season = "Please select a season";

    if(inputs.countryID === []) error.countryID = "Please select at less one country where the activity takes place";

    return error;
};