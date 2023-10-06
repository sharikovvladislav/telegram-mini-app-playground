import { CardComponent } from "@components/shared/card/card";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { ValueSelectorComponent } from "@components/shared/value-selector/value-selector";
import { computed, signal } from "@preact/signals";
import { getWebAppData } from "@utils/telegram.utils";
import { Fragment, useContext } from "preact/compat";
import {
  GameStateContext,
  StatisticContext,
  ThemeContext,
} from "../../interfaces/context";
import "./statistic.css";

const debugClickCount = signal(0);
const isDebugActive = computed(() => {
  return debugClickCount.value > 3;
});

export function StatisticComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevelForStatistic,
    increaseStatisticLevel,
    degreesStatisticLevel,
    currentLevelStatistic,
  } = useContext(StatisticContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const {
    increaseLevel,
    degreesLevel,
    gameLevel,
    showDebugInfo,
    toggleShowDebugInfo,
  } = useContext(GameStateContext);

  return (
    <ModalComponent
      title="Statistic"
      className="statistic"
      onTitleClick={() => {
        debugClickCount.value += 1;
      }}
    >
      {isDebugActive.value && (
        <CardComponent title="Settings">
          <KeyValueListComponent>
            <div>Current Level:</div>
            <ValueSelectorComponent
              value={gameLevel.value}
              increase={increaseLevel}
              degrees={degreesLevel}
            />
            <div>Theme:</div>
            <ValueSelectorComponent
              value={theme.value}
              increase={toggleTheme}
              degrees={toggleTheme}
            />
            <div>Show debug info:</div>
            <ValueSelectorComponent
              value={showDebugInfo.value ? "Yes" : "No"}
              increase={toggleShowDebugInfo}
              degrees={toggleShowDebugInfo}
            />
          </KeyValueListComponent>
        </CardComponent>
      )}

      {/* TODO make it better */}
      <CardComponent title="Choose level for statistic">
        <ValueSelectorComponent
          className="statistic__level-selector"
          value={gameLevelForStatistic.value}
          increase={increaseStatisticLevel}
          degrees={degreesStatisticLevel}
        />
      </CardComponent>

      <CardComponent title="Game Statistic">
        <KeyValueListComponent>
          <KeyValueComponent
            name="Average Time:"
            value={averageTimeSpentInSeconds.value}
          />
          <KeyValueComponent
            name="Average Flips:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </CardComponent>

      <CardComponent title="Game history">
        {/* TODO make history component */}
        {currentLevelStatistic.value.length > 0 ? (
          <KeyValueListComponent>
            <div>Time</div>
            <div>Flips</div>
            {currentLevelStatistic.value?.map(
              ({ timeSpentInSeconds, cardFlipsCount }) => (
                <Fragment>
                  <div>{timeSpentInSeconds}</div>
                  <div>{cardFlipsCount}</div>
                </Fragment>
              )
            )}
          </KeyValueListComponent>
        ) : (
          <div>No data for this level</div>
        )}
      </CardComponent>

      {isDebugActive.value && (
        <CardComponent title="Debug Info">
          <div class="statistic__debug">{getWebAppData()}</div>
        </CardComponent>
      )}
    </ModalComponent>
  );
}