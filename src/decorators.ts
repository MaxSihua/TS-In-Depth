export function sealed(param: string) {
    return function(constructor: function): void {
        console.log(`Sealing the constructor ${param}`);
        consol.log(constructor);
        consol.log(constructor.prototype);

        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}

export function logger<TFunction extends Function>(constructor: TFunction): TFunction {
    const newConstructor: Function = function() {
        console.log('Creating new instance');
        console.log(constructor);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(constructor.prototype);

    newConstructor.prototype.printLibrarian = function(): void {
        console.log(`Librarian name ${this.name}, Librarian age ${this.age}`);
    };

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function(target: any, methodName: string, decorator: PropertyDescriptor): PropertyDescriptor {
        console.log(target);
        console.log(methodName);
        console.log(decorator);

        return decorator;
    };
}


export function timeout(ms: number) {
    return function(target: any, methodName: string, decorator: PropertyDescriptor): PropertyDescriptor {
        const origionalMethod = decorator.value;

        decorator.value = function(...args: any[]) {
            if(window.confirm('Are you sure?')) {
                setTimeout(() => {
                    origionalMethod.apply(this, args);
                },ms);
            }
        };

        return decorator;
    };
}

// f()
// o.f()
// new f()
// f.call()

export function logParameter(target: any, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;

    (proto[key] ??= []).push(index);
}

export function logMethod(target: any, methodName: string, decorator: PropertyDescriptor): PropertyDescriptor {
    const origionalMethod = decorator.value;

    decorator.value = function(...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indexes = proto[key];

        if(Array.isArray(indexes)) {
            atgs.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        return origionalMethod.apply(this, args);
    };

    return decorator;

}

