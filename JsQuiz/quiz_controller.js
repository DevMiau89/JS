/**
 * Created by Jacob on 2018-01-08.
 */
function Quiz(question) {
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.question[this.questionIndex];
};

Quiz.prototype.isEnded = function() {
  return this.question.length === this.questionIndex;
};

Quiz.prototype.quess = function (answer) {

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
};
