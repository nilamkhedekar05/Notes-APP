/*const saveButton = document.querySelector('#btnSave');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const notesContainer = document.querySelector('#notes_container');
const deleteButton = document.querySelector('#btnDelete');

function clearForm() {
    titleInput.value = "";
    descriptionInput.value = "";
    deleteButton.classList.add('hiddenS');
}

function displayNoteInForm(note){
titleInput.value = note.title;
descriptionInput.value = note.description;
deleteButton.classList.remove('hidden');
deleteButton.setAttribute('data-id',note.id);
saveButton.setAttribute('data-id',note.id);

}

function getNoteById(id){
    fetch(`https://localhost:7017/api/notes/${id}`)
    .then(data => data.json())
    .then(response => displayNoteInForm(response));
}

function populateForm(id){
getNoteById(id);
}


function addNote(id, title, description) {
    const body = {
        title: title,
        description: description,
        isVisible: true,
    };

    fetch('https://localhost:7017/api/notes', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        console.log(data);
        clearForm();
        getAllNotes();
    })
    .catch(error => console.error('Error:', error));

}

function displayNotes(notes) {
    let allNotes = '';

    notes.forEach(note => {
        const noteElement = `
            <div class="note" data-id="${note.id}">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
            </div>
        `;
        allNotes += noteElement;
    });
    notesContainer.innerHTML = allNotes; // Corrected typo

    // add event listeners
    document.querySelectorAll('.note').forEach(note => {
        note.addEventListener('click',function(){
        populateForm(note.dataset.id);
    });
});

}

function getAllNotes() {
    fetch(`https://localhost:7017/api/notes`)
    .then(data => data.json())
    .then(response => displayNotes(response))
    /*.catch(error => console.error('Error:', error));

getAllNotes();

function updateNote(id,title,description){
    const body = {
        title: title,
        description: description,
        isVisible: true,
    };

    fetch(`https://localhost:7017/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        clearForm();
        getAllNotes();
    });



}

saveButton.addEventListener('click', function() {
    const id = saveButton.dataset.id;

    if (id){
        updateNote(id,titleInput.value,descriptionInput.value);
    }
    else{ 
    addNote(titleInput.value, descriptionInput.value);
    }
});

function deleteNote(id){
    fetch(`https://localhost:7017/api/notes/${id}`, {

        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        clearForm();
        getAllNotes();
        /*console.log(response);
    });
}



deleteButton.addEventListener('click', function() {
    const id = deleteButton.dataset.id;
    deleteNote(id);
});
}*/


const saveButton = document.querySelector('#btnSave');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const notesContainer = document.querySelector('#notes_container');
const deleteButton = document.querySelector('#btnDelete');

function clearForm() {
    titleInput.value = "";
    descriptionInput.value = "";
    deleteButton.classList.add('hidden');
    saveButton.removeAttribute('data-id');
    deleteButton.removeAttribute('data-id');
}

function displayNoteInForm(note) {
    titleInput.value = note.title;
    descriptionInput.value = note.description;
    deleteButton.classList.remove('hidden');
    deleteButton.setAttribute('data-id', note.id);
    saveButton.setAttribute('data-id', note.id);
}

function getNoteById(id) {
    fetch(`https://localhost:7017/api/notes/${id}`)
        .then(data => data.json())
        .then(response => displayNoteInForm(response))
        .catch(error => console.error('Error:', error));
}

function populateForm(id) {
    getNoteById(id);
}

function addNote(title, description) {
    const body = {
        title: title,
        description: description,
        isVisible: true,
    };

    fetch('https://localhost:7017/api/notes', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        console.log(response);
        clearForm();
        getAllNotes();
    })
    .catch(error => console.error('Error:', error));
}

function updateNote(id, title, description) {
    const body = {
        title: title,
        description: description,
        isVisible: true,
    };

    fetch(`https://localhost:7017/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => {
        clearForm();
        getAllNotes();
    })
    .catch(error => console.error('Error:', error));
}

function deleteNote(id) {
    fetch(`https://localhost:7017/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        clearForm();
        getAllNotes();
    })
    .catch(error => console.error('Error:', error));
}

function displayNotes(notes) {
    let allNotes = '';

    notes.forEach(note => {
        const noteElement = `
            <div class="note" data-id="${note.id}">
                <h3>${note.title}</h3>
                <p>${note.description}</p>
            </div>
        `;
        allNotes += noteElement;
    });
    notesContainer.innerHTML = allNotes;

    // Add event listeners
    document.querySelectorAll('.note').forEach(note => {
        note.addEventListener('click', function() {
            populateForm(note.dataset.id);
        });
    });
}

function getAllNotes() {
    fetch('https://localhost:7017/api/notes')
        .then(data => data.json())
        .then(response => displayNotes(response))
        .catch(error => console.error('Error:', error));
}

// Initial load
getAllNotes();

saveButton.addEventListener('click', function() {
    const id = saveButton.dataset.id;

    if (id) {
        updateNote(id, titleInput.value, descriptionInput.value);
    } else {
        addNote(titleInput.value, descriptionInput.value);
    }
});

deleteButton.addEventListener('click', function() {
    const id = deleteButton.dataset.id;
    deleteNote(id);
});
