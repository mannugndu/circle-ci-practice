const sum = (a,b)=>{
	return a+b;
}

it("should add correctly",()=>{
	expect(sum(10,10)).toBe(10);
})