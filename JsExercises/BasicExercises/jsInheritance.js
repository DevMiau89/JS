/**
 * Created by DevMiau on 23-Mar-18.
 */
var Job = function () {
    this.pays = true;
};

Job.prototype.print = function () {
  console.log(this.pays ? 'I want this job': 'No,thanks')
};


var TechJob = function (position, pays) {
    Job.call(this);
    console.log(this);
    this.position = position;
    this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

let job = new TechJob('Js Developer', true);
let job2 = new TechJob('Js Developer');

job.print();
job2.print();