import {

createContext,

useState

}

from "react";

import {

users,

recruiters,

jobs,

applications

}

from "../data/dummyData";

export const AppContext=

createContext();

function AppProvider({

children

}){

const[
allUsers,
setUsers
]=useState(
users
);

const[
allRecruiters,
setRecruiters
]=useState(
recruiters
);

const[
allJobs,
setJobs
]=useState(
jobs
);

const[
allApplications,
setApplications
]=useState(
applications
);

return(

<AppContext.Provider

value={{

allUsers,
setUsers,

allRecruiters,
setRecruiters,

allJobs,
setJobs,

allApplications,
setApplications

}}

>

{children}

</AppContext.Provider>

)

}

export default AppProvider