import { DummyResource, DummyResourceCollection } from 'webpanel-data';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import { CommentsForm } from '../lib/CommentsForm';
import { CommentsList } from '../lib/CommentsList';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { comments } from './data';
import { storiesOf } from '@storybook/react';

storiesOf('Comments', module)
  .addDecorator(withKnobs)
  .add(
    'list',
    () => {
      // const collection = new DummyResourceCollection({
      //   initialData: comments
      // });
      // collection.get();
      return (
        <div style={{ padding: 80 }}>
          <CommentsList
            items={boolean('Empty', false) ? [] : comments}
            hasMore={false}
            loadMore={() => {}}
            onDelete={action('delete')}
          />
        </div>
      );
    },
    { notes: 'A very simple component' }
  )
  .add('form', () => {
    const resource = new DummyResource({});
    return (
      <div style={{ padding: 80 }}>
        <CommentsForm resource={resource} />
      </div>
    );
  });
