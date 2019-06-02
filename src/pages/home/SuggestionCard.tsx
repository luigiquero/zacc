import React, { useState } from 'react';
import { Button, Card, Intent } from '@blueprintjs/core';
import { Column, Table } from '@blueprintjs/table';

enum SuggestionCardState {
  initial,
  suggest,
  check,
}

function useSuggestionCard() {
  const [cardPresentation, setCardPresentation] = useState<SuggestionCardState>(SuggestionCardState.initial);

  return {
    cardPresentation,
    reset(){ setCardPresentation(SuggestionCardState.initial); },
    suggestSubject() { setCardPresentation(SuggestionCardState.suggest); },
    checkSuggestions() { setCardPresentation(SuggestionCardState.check); },
  }
}

const SuggestionCardSuggest = (props: ReturnType<typeof useSuggestionCard>) => {
  return (
    <>
      <p>Sugestão de estudos</p>
      <Table numRows={5}>
        <Column />
        <Column />
        <Column />
      </Table>
      <p onClick={props.reset}>Veja Mais</p>
    </>
  );
};

const SuggestionCardCheck = (props: ReturnType<typeof useSuggestionCard>) => {
  return (
    <>
      <p>Fazer Sugestão</p>
      <p onClick={props.reset}>Veja Mais</p>
    </>
  );
};

const SuggestionCardInitial = ({ suggestSubject, checkSuggestions }: ReturnType<typeof useSuggestionCard>) => (
  <>
    <p className="home__text home__text--suggestion">
      Vimos que você não está tão bem em Português,
      temos algumas sugestões de estudos para você!
    </p>
    <div className="home__positioner">
      <Button intent={Intent.NONE} large className="home__button home__button--suggestion" onClick={suggestSubject}>
        Sugerir Matéria
      </Button>
      <Button intent={Intent.PRIMARY} large className="home__button home__button--suggestion" onClick={checkSuggestions}>
        Ver Sugestão
      </Button>
    </div>
  </>
);

const SuggestionCard = () => {
  const suggestionConfig = useSuggestionCard();

  return (
    <Card elevation={2} className="home__card home__card--suggestion">
      {(() => {
        switch (suggestionConfig.cardPresentation) {
          case SuggestionCardState.check:
            return <SuggestionCardCheck {...suggestionConfig} />;

          case SuggestionCardState.suggest:
            return <SuggestionCardSuggest {...suggestionConfig} />;

          case SuggestionCardState.initial:
          default:
            return <SuggestionCardInitial {...suggestionConfig} />;
        }
      })()}
    </Card>
  );
};

export default SuggestionCard;
