const sum = (a,b)=>{
	return a+b;
}

it("should add correctly",()=>{
	expect(sum(10,10)).toBe(20);
})

it("should add two numbers",()=>{
	expect(sum(1,2)).toBe(3);
})
