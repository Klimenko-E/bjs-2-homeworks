function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	//let marks = [];
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marksToAdd);
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		return 0;
	} else {
		return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;
	}

}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}