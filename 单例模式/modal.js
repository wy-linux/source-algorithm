class Modal {
    constructor() {
        if (Modal.instance) {
            return Modal.instance;
        }
        this.modalContent = null;
        this.isOpen = false;
        Modal.instance = this;
    }

    open(content) {
        if (!this.isOpen) {
            this.modalContent = content;
            this.isOpen = true;
            this.render();
        }
    }

    close() {
        if (this.isOpen) {
            this.modalContent = null;
            this.isOpen = false;
            this.render();
        }
    }

    render() {
        const modalContainer = document.getElementById('modal-container');
        if (this.isOpen) {
            modalContainer.innerHTML = this.modalContent;
            modalContainer.style.display = 'block';
        } else {
            modalContainer.innerHTML = '';
            modalContainer.style.display = 'none';
        }
    }
}


const myModal = new Modal(); // 创建实例
myModal.open('<p>This is the modal content.</p>'); // 打开弹窗
myModal.close(); // 关闭弹窗
