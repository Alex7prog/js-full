// markFavorites (recursion)

// markFavorites()
// in: ({}, [isFavorite]) / out:{+ isFavorite:} according [isFavorite]

export const markFavorites = (tree, favorites) => {
  console.log('tree: ', tree);
  console.log('tree.id: ', tree.id);
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNodes => markFavorites(childNodes, favorites)),
  };
};

// -- test-data

const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Vechicles',
      nodes: [],
    },
  ],
};

const result = markFavorites(tree, favorites);
console.log('result: ', result);
