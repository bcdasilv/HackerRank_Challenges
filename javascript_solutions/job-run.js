//Google
// class Job {
//   run();
//   getDep(): Job|undefined;
// }

// function runJobs(jobs: Job[]) {
  
// }

// Typescript ^^^

// class Job {
//   run();
//   getDep();
// }

//Assuming all the jobs start as not run
function runJobs(jobs) {
  let stack = [];
  for (const job of jobs) {
    const dep = job.getDep();
    if (dep) {
      stack = push(dep);
    }
    else job.run();
  }
}

function runJobs(jobs) {
  for (const job of jobs) {
    runJob(job);
  }
}

function runJob(job) {
  const dep = job.getDep();
  if (dep) {
    runJob(dep);
  }
  job.run();
  //TODO: Remove the job from the array since we should run a job only once
  // Or we could maintain a map of jobs run based on job IDs (but not sure if job IDs are allowed)
  //Or we could maintain a list of already run Jobs and always look it up.
  // This increases the runtime complexity from linear to qadratic.
}

/*
Req: run each job only once
Req: in order to run a job, its dependency needs to be run beforehand

jobs= [j1, j2, j3, j4]

j2 -> j3

j1 runs

j2:
dep: j3
queue = []
job2 = j3


jobs= [j1, j2, j3, j4]

j2 -> j3 -> j4

j1 runs

job = j2
dep: j3
queue = [j4]
job2 = j4
depDep = undefined
*/