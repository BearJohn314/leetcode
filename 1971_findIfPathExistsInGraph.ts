// Runtime: 498 ms Beats 91.9%
// Memory: 81.1 MB Beats 100%

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (source == destination){return true}
    if (edges.length == 0){
        return false
    }
    if (edges.filter(path=>path.includes(source)).filter(path=>path.includes(destination)).length > 0){
        return true
    }
    let nextPositions = nextMove(edges,source)
    let remainingPositions = edges.filter(path=>!path.includes(source))
    while (nextPositions.size > 0){
        const iterator = nextPositions.values();
        let current = iterator.next().value
        nextPositions.delete(current)
        if (remainingPositions.filter(path=>path.includes(current)).filter(path=>path.includes(destination)).length > 0){
            return true
        }
        let furtherSteps = nextMove(remainingPositions,current)
        nextPositions = new Set([...nextPositions,...furtherSteps])
        remainingPositions = Array.from(remainingPositions).filter(path=>!path.includes(current))
    }
    return false
};

function nextMove(edges: number[][], source:number): Set<any> {
    let possibleMoves = edges.filter(path=>path.includes(source))
    let result = new Set()
    for (let edge of possibleMoves){
        if (edge[0]==source){
            result.add(edge[1])
        }else{
            result.add(edge[0])
        }
    }
    return result
}