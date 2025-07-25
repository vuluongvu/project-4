class Student {
    constructor(id, name, hometown, mathScore, physicalScore, chemistryScore) {
        this.id = id;
        this.name = name;
        this.hometown = hometown;
        this.mathScore = parseFloat(mathScore);
        this.physicalScore = parseFloat(physicalScore);
        this.chemistryScore = parseFloat(chemistryScore);
    }

    get avgScore() {
        return (
            (this.mathScore + this.physicalScore + this.chemistryScore) / 3
        ).toFixed(2);
    }

    displayStudentInformation() {
        console.log("Mã sinh viên: " + this.id);
        console.log("Tên sinh viên: " + this.name);
        console.log("Quê quán: " + this.hometown);
        console.log("Điểm trung bình: " + this.avgScore);
        console.log("----------------------------------------------");
    }
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let danhSach = [];
let n = 0;
let count = 0;

console.log("Nhập số lượng sinh viên:");

rl.on("line", (input) => {
    if (n === 0) {
        n = parseInt(input);
        console.log(`Nhập thông tin cho ${n} sinh viên: (id, name, hometown, math, chemistry, physical)`);
    } else {
        const values = input.trim().split(",");
        if (values.length !== 6) {
            console.log("Vui lòng nhập đúng 6 giá trị cách nhau bằng dấu phẩy.");
        } else {
            const [id, name, hometown, math, chemistry, physical] = values;
            const student = new Student(id, name, hometown, math, physical, chemistry);
            danhSach.push(student);
            count++;
        }

        if (count === n) {
            console.log("\n--- Danh sách sinh viên theo điểm trung bình giảm dần ---\n");

            // Sắp xếp theo điểm trung bình giảm dần
            const sortedList = danhSach.sort((a, b) => b.avgScore - a.avgScore);

            for (const student of sortedList) {
                student.displayStudentInformation();
            }

            rl.close();
        }
    }
});
