function padLeft(padding: number | string, input: string) {
    if(typeof padding === "number") { //o typeguard é inserido aqui.
        return "".repeat(padding) + input;
    }
    return padding + input;
}