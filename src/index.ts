export {EditorView, DOMEventMap, DOMEventHandlers} from "./editorview"
export {Command, ViewPlugin, PluginValue, PluginSpec, PluginFieldProvider, PluginField, ViewUpdate, logException} from "./extension"
export {Decoration, DecorationSet, WidgetType, BlockType} from "./decoration"
export {BlockInfo} from "./heightmap"
export {MouseSelectionStyle} from "./input"
export {BidiSpan, Direction} from "./bidi"
export {KeyBinding, keymap, runScopeHandlers} from "./keymap"
export {drawSelection} from "./draw-selection"
export {highlightSpecialChars} from "./special-chars"
export {scrollPastEnd} from "./scrollpastend"
export {highlightActiveLine} from "./active-line"
export {placeholder} from "./placeholder"
export {Rect} from "./dom"
export {MatchDecorator} from "./matchdecorator"
export {Range} from "@codemirror/rangeset"

import {HeightMap, HeightOracle, MeasuredHeights, QueryType} from "./heightmap"
import {ChangedRange} from "./extension"
import {computeOrder, moveVisually} from "./bidi"
/// @internal
export const __test = {HeightMap, HeightOracle, MeasuredHeights, QueryType, ChangedRange, computeOrder, moveVisually}

export {PluginInstance, viewPlugin, editorAttributes, contentAttributes, decorations, styleModule, ChangedRange} from "./extension"
export {ViewState, Viewport} from './viewstate'

import { addRange } from './decoration'
const decorationHelpers =  { addRange }
export { decorationHelpers}

export {theme, darkTheme, buildTheme, baseThemeID, baseLightID, baseDarkID, lightDarkIDs, baseTheme} from "./theme"
