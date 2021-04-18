import { Box, Grid } from '@material-ui/core';
import React from 'react';
import SkeletonContactCard from '../SkeletonContactCard/SkeletonContactCard';

interface SkeletonContactsHeroPropsType {
  length?: number;
}

export default function SkeletonContactsHero({ length = 10 }: SkeletonContactsHeroPropsType) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((user) => (
          <Grid item xs={12} sm={6} md={4}>
            <SkeletonContactCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
