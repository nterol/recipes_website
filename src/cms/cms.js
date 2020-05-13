import CMS from 'netlify-cms-app';

import RecipePagePreview from './preview-template/RecipePagePreview';

CMS.registerPreviewStyle('../layout/css/layout.css');

CMS.registerPreviewTemplate('recipes', RecipePagePreview)