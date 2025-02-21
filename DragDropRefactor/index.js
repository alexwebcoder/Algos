document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".draggable");
    document.getElementById('startButton').addEventListener('click', () => {
        document.getElementById('startButton').disabled = true;
        document.querySelector('.page-load').style.display = 'none';
 
        const gameContainers = [...document.querySelectorAll('.game-container:not(.page-load)')];
        gameContainers[0].style.display = 'flex';
        gameContainers[0].classList.add('active');
        setTimeout(() => {
            gameContainers[0].classList.remove('active');
        }, 1000); 
    });
 
    const targets = document.querySelectorAll(".dropzone");
    let draggedItem = null;
    let originalParent = null;
    let isDragging = false;
    let keyboardDragging = false;
 
    items.forEach((item, index) => {
        item.style.touchAction = "none";
        item.dataset.index = index;
        item.setAttribute("tabindex", "0");
        item.addEventListener("pointerdown", startDrag);
        item.addEventListener("keydown", handleKeyboardDrag);
    });
 
    function startDrag(e) {
        if (e.target.classList.contains("locked")) return;
        e.preventDefault();
        draggedItem = e.target;
        originalParent = draggedItem.parentElement;
        document.addEventListener("pointermove", onPointerMove);
        document.addEventListener("pointerup", onPointerUp);
    }
 
    function onPointerMove(e) {
        if (!draggedItem) return;
        draggedItem.style.position = "absolute";
        draggedItem.style.left = `${e.pageX}px`;
        draggedItem.style.top = `${e.pageY}px`;
    }
 
    function onPointerUp(e) {
        if (!draggedItem) return;
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        checkDrop(e);
    }
 
    function handleKeyboardDrag(e) {
        if (e.key === "Enter" || e.key === " ") {
            if (!keyboardDragging) {
                keyboardDragging = true;
                draggedItem = e.target;
                draggedItem.classList.add("dragging");
            } else {
                keyboardDragging = false;
                checkDrop(e);
            }
        }
 
        if (keyboardDragging) {
            let parent = draggedItem.parentElement;
            let siblings = [...parent.children];
            let index = siblings.indexOf(draggedItem);
 
            if (e.key === "ArrowDown" && index < siblings.length - 1) {
                parent.insertBefore(siblings[index + 1], draggedItem);
            }
            if (e.key === "ArrowUp" && index > 0) {
                parent.insertBefore(draggedItem, siblings[index - 1]);
            }
        }
    }
 
    function checkDrop(e) {
        let dropped = false;
        targets.forEach(target => {
            let rect = target.getBoundingClientRect();
            if (e.key || (e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom)) {
                if (target.dataset.match === draggedItem.dataset.match) {
                    target.appendChild(draggedItem);
                    draggedItem.style.position = "static";
                    dropped = true;
                    draggedItem.classList.add("locked");
                }
            }
        });
        if (!dropped) resetItemPosition(draggedItem);
        draggedItem = null;
    }
 
    function resetItemPosition(item) {
        originalParent.appendChild(item);
        item.classList.remove("dragging");
    }
 
    function checkIfRoundComplete() {
        const gameContainers = [...document.querySelectorAll('.game-container:not(.page-load)')];
        const gameOverContainer = document.querySelector('.game-over');
        const currentContainer = gameContainers.find(container => container.style.display !== 'none');
 
        const dropzones = currentContainer.querySelectorAll('.dropzone');
        const allMatched = Array.from(dropzones).every(target => {
            const droppedItem = target.children[0];
            return droppedItem && droppedItem.dataset.match === target.dataset.match;
        });
 
        if (allMatched) {
            setTimeout(() => {
                currentContainer.style.display = 'none';
                const nextContainer = gameContainers.find(container => container.style.display === 'none');
                if (nextContainer) {
                    nextContainer.style.display = 'flex';
                } else {
                    gameOverContainer.style.display = 'flex';
                }
            }, 8000);
        }
    }
 });
 