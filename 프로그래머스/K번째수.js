function solution(a, c) {
    return c.map(i => a.slice(i[0]-1, i[1]).sort((a,b)=>a-b)[i[2]-1])
}