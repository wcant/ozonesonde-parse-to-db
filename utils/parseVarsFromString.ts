export const parseVarsFromString = (str: string, varnames: string[], delimiter:string): string[] => {

	const values = []
  
  for (let i=0; i<str.length-1; i++) {
    const left = varnames[i];
    const right = varnames[i+1];

		const leftPos = str.indexOf(left) + left.length;
    let rightPos
    if (str.indexOf(right) > 1){
    	rightPos = str.indexOf(right);
    } else rightPos = str.length-1
    

    const value = str.slice(leftPos, rightPos);
		values.push(value.split(delimiter)[1].trim());
  }
  return values;
};
