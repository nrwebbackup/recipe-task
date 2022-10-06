import { useState } from 'react';

import { useDebounce } from './useDebounce';

export const useSearch = () => {
  const [search, setSearch] = useState('');

  const query = useDebounce(search, 500);

  return { query, search, setSearch };
};
