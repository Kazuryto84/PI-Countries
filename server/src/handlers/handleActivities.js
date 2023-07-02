const {STATUS_OK, STATUS_ERROR, SERVER_ERROR} = require('../utilities/statusCodes');
const {createActivity, getActivities, findCountryById, 
    linkActivityToCountry, findActivity} = require('../controllers/index');

 async function postActivity(req, res) {
    try{
        const {name, difficulty, duration, season, countryID} = req.body;
        if(!name || !difficulty || !duration || !season || countryID.length === 0) 
            return res.status(Number(STATUS_ERROR)).json({error: "The require information is missing"});

        

        const exist = await findActivity(name);

        if(exist.length !== 0) return res.status(Number(STATUS_ERROR)).json({error: "The Activitity already exist"});
        
        const activity = await createActivity(name, difficulty, duration, season);

        let country = await findCountryById(countryID);

        country.forEach(async(id) => await linkActivityToCountry(id, activity));
        
        if(!activity) return res.status(Number(SERVER_ERROR)).json({
            error: "There was an error while creating the activity"});
        
        return res.status(Number(STATUS_OK)).json(activity);
    }catch(error){res.status(Number(SERVER_ERROR)).json({error: error.message})};
};

async function getActivity(req, res){
    try{
        const activities = await getActivities();

        if(!activities) return res.status(Number(STATUS_ERROR)).json({
            error: "There was an error trying to get the activities"});

        return res.status(Number(STATUS_OK)).json(activities);
    }catch(error){res.status(Number(SERVER_ERROR)).json({error: error.message})};
};

module.exports = {
    postActivity,
    getActivity
};