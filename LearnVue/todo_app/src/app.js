var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vueeeee!',
        newContent: null,
        editingContent: null,
        todos: [
            {
                content: 'Item 1',
                finished: false,
                isEditing: false
            },
            {
                content: 'Item 2',
                finished: false,
                isEditing: false
            }
        ]
    },
    methods: {
        add() {
            if (!this.isNewContentValid)
                return;

            console.log('adding ' + this.newContent);
            this.todos.push({
                content: this.newContent,
                finished: false,
                isEditing: false
            });
            this.newContent = null;
        },
        edit(todo) {
            this.editingContent = todo.content;
            todo.isEditing = true;
        },
        remove(todo) {
            console.log('removing ' + todo.content);
            this.todos = this.todos.filter(item => item !== todo);
        },
        update(todo) {
            if (!this.isEditingContentValid)
                return;
            todo.content = this.editingContent;
            this.editingContent = null;
            todo.isEditing = false;
        },
        cancel(todo) {
            this.editingContent = null;
            todo.isEditing = false;
        }
    },
    computed: {
        isNewContentValid() {
            return !!this.newContent;
        },
        isEditingContentValid() {
            return this.editingContent;
        },
        isEditingAny() {
            return this.todos.filter(todo => todo.isEditing).length > 0;
        }
    }
})
