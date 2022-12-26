function apiConstructor(raw) {
  const rawArray = [];

  raw.forEach((item) => {
    rawArray.push({
      id: item.id,
      number: item.number,
      type: item.type,
      creationDate: new Date(item.creationDate).toLocaleDateString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
  });

  return rawArray;
}

const raw = [
  {
    id: '01-ОБ/2022',
    number: '159-F',
    type: 'Pickup',
    creationDate: '2022-07-15T10:21:35.315271',
  },
  {
    id: '02-ОБ/2022',
    number: 'a-35',
    type: 'Delivery',
    creationDate: '2022-07-25T15:37:45.084291',
  },
  {
    id: '03-ОБ/2022',
    number: 'B-411',
    type: 'Pick-point',
    creationDate: '2022-08-01T09:11:26.264541',
  },
  {
    id: '04-ОБ/2022',
    number: '35-Ad',
    type: 'Pickup',
    creationDate: '2022-08-01T21:41:19.353652',
  },
  {
    id: '05-ОБ/2022',
    number: 'Ah-510',
    type: 'Pick-point',
    creationDate: '2022-08-12T18:01:51.526705',
  },
];

const total = apiConstructor(raw);

export default total;
