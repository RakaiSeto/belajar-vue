// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal() {
//     const entered = input.value;
//     const listItem = document.createElement('li');
//     listItem.textContent = entered;
//     list.appendChild(listItem);
//     input.value = ""
// }

// button.addEventListener('click', addGoal);
const { createApp } = Vue
createApp({
    data() {
        return {
            goals: [],
            entered: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.entered)
            this.entered = ''
        }
    },
}).mount('#app')