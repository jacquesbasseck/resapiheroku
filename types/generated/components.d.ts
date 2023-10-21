import type { Schema, Attribute } from '@strapi/strapi';

export interface InformationActualite extends Schema.Component {
  collectionName: 'components_information_actualite';
  info: {
    displayName: 'Actualit\u00E9';
  };
  attributes: {
    type: Attribute.Enumeration<['video', 'image', 'texte']> &
      Attribute.DefaultTo<'texte'>;
    media: Attribute.Media;
    video: Attribute.String;
    title: Attribute.String;
    texte: Attribute.RichText;
  };
}

export interface ListeAvantages extends Schema.Component {
  collectionName: 'components_liste_avantages';
  info: {
    displayName: 'Avantages';
  };
  attributes: {
    avantage1: Attribute.String;
    avantage2: Attribute.String;
    avantage3: Attribute.String;
    avantage4: Attribute.String;
    avantage5: Attribute.String;
    avantage6: Attribute.String;
  };
}

export interface ListeDesc extends Schema.Component {
  collectionName: 'components_liste_descs';
  info: {
    displayName: 'Desc';
    description: '';
  };
  attributes: {
    titre: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'information.actualite': InformationActualite;
      'liste.avantages': ListeAvantages;
      'liste.desc': ListeDesc;
    }
  }
}
