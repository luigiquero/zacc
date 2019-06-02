import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { Button, Card, Intent } from '@blueprintjs/core';
import { Cell, Column, Table } from '@blueprintjs/table';
import { Link } from 'react-router-dom';

import suggestions from '../../data/suggestionsMock';

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
      <p>Fazer Sugestão</p>
      <p onClick={props.reset}>Veja Mais</p>
    </>
  );
};

const SuggestionCardCheck = (props: ReturnType<typeof useSuggestionCard>) => {
  const [_suggestions, setState] = useState(suggestions.slice(0, 3));

  const swap = useCallback((i) => () => {
    setState(_suggestions.map((s, _i) => _i === i
      ? suggestions[_.random(0, suggestions.length - 1, false)]
      : s,
    ))
  }, [_suggestions]);

  return (
    <>
      <p>Sugestão de estudos</p>
      <Table numRows={_suggestions.length}>
        <Column name="Matéria" cellRenderer={(i) => <Cell>{_suggestions[i].materia}</Cell>}/>
        <Column name="Conteúdo" cellRenderer={(i) => <Cell>{_suggestions[i].conteudo}</Cell>}/>
        <Column
          name=""
          cellRenderer={(i) => (
            <Cell>
              <Link to="https://google.com">Estudar</Link>
              <Button minimal onClick={swap(i)}>Opa</Button>
            </Cell>
          )}
        />
      </Table>
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
