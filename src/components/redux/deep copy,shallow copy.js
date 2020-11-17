var a = {
    type: 'deep',
    house: 'shallow',
    online: true,
    students: ['dmitry', 'dima', 'kolya'],
    constructor: {
        teacher: {
            name: 'fig',
            age: 20
        }
    }
}

var b = {...a};
b.constructor = {...a.constructor};
b.constructor.teacher = {...a.constructor.teacher};
b.constructor.teacher.name = 'kk';
b.students = [...a.students];
b.students.push('valya');