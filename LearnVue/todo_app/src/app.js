var app = new Vue({
    el: '#app',
    data: {
        todo: null,
        message: 'Hello Vueeeee!',
        todos: [
            {
                content: 'Item 1',
                finished: false
            },
            {
                content: 'Item 2',
                finished: false
            }
        ]
    },
    methods: {
        add(todo) {
            if (!this.todoIsValid)
            {
                return;
            }

            console.log('adding ' + todo.content);
            this.todos.push({ content: todo, finished: false });
            this.todo = null;
        },
        remove(todo) {
            console.log('removing ' + todo.content);
            this.todos = this.todos.filter(item => item !== todo);
        }
    },
    computed: {
        todoIsValid() {
            return !!this.todo;
        }
    }
})
