import { Component } from '@angular/core';
import { todoItem } from  'src/app/model/todo-item.model';
interface Todo {
  text: string;
  completed: boolean;
  postponed: boolean;
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  newTodo: string = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim() !== '') {
      const todo: Todo = {
        text: this.newTodo,
        completed: false,
        postponed: false
      };
      this.todos.push(todo);
      this.newTodo = '';
      alert('you can -_-')
    }
  }

  markAsComplete(todo: Todo) {
    todo.completed = true;
    alert('good job')
  }

  markAsPostponed(todo: Todo) {
    todo.postponed = true;
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  clean() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  restore() {
    this.todos.forEach(todo => {
      todo.postponed = false;
      alert('Do not worry, you can do it')
    });
  }

editTodo(todo: any) {
  const updatedText = prompt('Edit Todo', todo.text);
  if (updatedText !== null) {
    todo.text = updatedText;
  }
}
isEnter() : boolean{
  return this.newTodo==="";
}
}