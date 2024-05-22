interface Student {
  id: number;
  name: string;
  // Add other relevant student properties here
}

class School {
  students: Student[];

  constructor() {
    this.students = [];
  }

  setStudents(data: any): void {
    if (Array.isArray(data) && data.every(item => typeof item === 'object')) {
      this.students = data as Student[];
    } else {
      console.error('Invalid data provided');
    }
  }
}

// Usage
const school = new School();
// Assuming 'data' is an array of student objects
school.setStudents(data);
