function defangIPaddr(address: string): string {
    const arr = address.split(".")
    return arr.join("[.]");
};