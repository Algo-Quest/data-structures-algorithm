if (this.root.child.length == 0) {
            this.root.keys.push(value);
            if (this.root.keys.length == ORDER) {
                this.insertHelper(this.root);
            }
        }
        else {
            let current = this.root;
            while (current.child.length != 0) {
                let i;
                for (i = 0; i < current.keys.length; i++) {
                    if (value < current.keys[i]) break;
                }


                current = current.child[i];
                if (current.keys.length == ORDER) {
                    this.insertHelper(current);
                }
            }
            current.keys.push(value);
        }