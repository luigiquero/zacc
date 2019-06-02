import React, { useCallback, useState } from 'react';
import { Button, Card, Colors, Intent } from '@blueprintjs/core';
import { Cell, Column, Table } from '@blueprintjs/table';
import { Link } from 'react-router-dom';

import suggestions from '../../data/suggestionsMock';
import { widths } from '../../utils/table';

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

const indexToSubject = [
  'Redação',
  'Gramática',
  'Literatura',
];

const findNextDiff = (target: any, list: any[]) => {
  if (list.length === 0) {
    return target;
  }

  const index = list.indexOf(target);

  if (index === -1) {
    return target;
  }

  return list[(index + 1) % list.length];
};

const SuggestionCardCheck = (props: ReturnType<typeof useSuggestionCard>) => {
  const [_suggestions, setState] = useState(indexToSubject.map(s => suggestions[s][0]));

  const swap = useCallback((i) => () => {
    setState((state: any) => {
      const subject = indexToSubject[i];
      return state.map((s: any, _i: number) => i === _i ? findNextDiff(state[i], suggestions[subject]) : s);
    })
  }, []);

  return (
    <div className="check">
      <p className="home__card-title">Sugestão de estudos</p>
      <Table
        enableRowHeader={false}
        numRows={_suggestions.length as number}
        columnWidths={widths(3)}
      >
        <Column name="Matéria" cellRenderer={(i) => <Cell>{indexToSubject[i]}</Cell>}/>
        <Column name="Conteúdo" cellRenderer={(i) => <Cell>{_suggestions[i]}</Cell>}/>
        <Column
          name=""
          cellRenderer={(i) => (
            <Cell>
              <div>
                <Link to="https://google.com" style={{ color: Colors.TURQUOISE3}}>Estudar</Link>
                <Button minimal onClick={swap(i)} intent={Intent.PRIMARY} icon="refresh"/>
              </div>
            </Cell>
          )}
        />
      </Table>
      <p onClick={props.reset} className="see__more">Veja Mais</p>
    </div>
  );
};

const SuggestionCardInitial = ({ suggestSubject, checkSuggestions }: ReturnType<typeof useSuggestionCard>) => (
  <div className="initial">
    <p className="home__text home__text--suggestion">
      Vimos que você não está tão bem em Português,
      temos algumas sugestões de estudos para você!
    </p>
    <div className="home__positioner">
      <Button intent={Intent.NONE} large className="home__button home__button--suggestion">
        Sugerir Matéria
      </Button>
      <Button intent={Intent.PRIMARY} large className="home__button home__button--suggestion" onClick={checkSuggestions}>
        Ver Sugestão
      </Button>
    </div>
  </div>
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
            return null;

          case SuggestionCardState.initial:
          default:
            return <SuggestionCardInitial {...suggestionConfig} />;
        }
      })()}
    </Card>
  );
};

export default SuggestionCard;
