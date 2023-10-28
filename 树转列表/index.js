const trees = [
    {
        id: 1,
        name: '部门1',
        pid: 0,
        children: [
            { id: 2, name: '部门2', pid: 1 },
            {
                id: 3,
                name: '部门3',
                pid: 1,
                children: [
                    {
                        id: 4,
                        name: '部门4',
                        pid: 3,
                        children: [{ id: 5, name: '部门5', pid: 4 }]
                    }
                ]
            }
        ]
    },
    { id: 6, name: '部门6', pid: 0 }
]

function treeToList(trees) {
    let result = []
    for (const tree of trees) {
        result.push(tree)
        if (tree.children) {
            result = result.concat(treeToList(tree.children))
            delete tree.children
        }
    }
    return result
}

const list = treeToList(trees)

console.dir(list, { depth: null })