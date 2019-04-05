import _ from 'lodash';

export function paginate (items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const lastIndex = pageSize * pageNumber;

  return items.slice(startIndex, lastIndex);
}