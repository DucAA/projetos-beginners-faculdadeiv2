const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
const elementoLista = document.querySelector('ul')

const tarefas = ['tarefa 1']

function mostraTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {

        const itemLista = document.createElement('li')
        const deletar = document.createElement('a')

        itemLista.innerText = tarefa
        deletar.innerText = "delete"

        elementoLista.appendChild(itemLista)
        itemLista.appendChild(deletar)

        const posicaoItem = tarefas.indexOf(tarefa)
        deletar.setAttribute('onclick', `deletarTarefa(${posicaoItem})`)
        deletar.setAttribute('class', 'material-icons')
    }
}

mostraTarefas()

function addTarefa() {
    textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    mostraTarefas()
    elementoInput.value = ''
}

elementoBotao.setAttribute('onclick', 'addTarefa()')

function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1)
    mostraTarefas()
}