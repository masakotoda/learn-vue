var app = new Vue({
    el: '#app',
    data: {
        todo: null,
        message: 'Hello Vueeeee!',
        todos: [
            'Item 1',
            'Item 2'
        ]
    },
    methods: {
        add(todo) {
            if (!this.todoIsValid)
            {
                return;
            }

            console.log(todo);
            this.todos.push(todo);
            this.todo = null;
        }
    },
    computed: {
        todoIsValid() {
            return !!this.todo;
        }
    }
})
