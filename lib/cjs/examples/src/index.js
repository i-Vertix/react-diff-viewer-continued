import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './style.scss';
import { Component } from 'react';
import ReactDiff, { DiffMethod } from '../../src/index';
import logo from '../../logo.png';
import cn from 'classnames';
import { createRoot } from "react-dom/client";
import oldJs from './diff/javascript/old.rjs?raw';
import newJs from './diff/javascript/new.rjs?raw';
import oldYaml from './diff/massive/old.yaml?raw';
import newYaml from './diff/massive/new.yaml?raw';
import oldJson from './diff/json/old.json';
import newJson from './diff/json/new.json';
const P = window.Prism;
class Example extends Component {
    constructor(props) {
        super(props);
        this.onLineNumberClick = (id, e) => {
            let highlightLine = [id];
            if (e.shiftKey && this.state.highlightLine.length === 1) {
                const [dir, oldId] = this.state.highlightLine[0].split('-');
                const [newDir, newId] = id.split('-');
                if (dir === newDir) {
                    highlightLine = [];
                    const lowEnd = Math.min(Number(oldId), Number(newId));
                    const highEnd = Math.max(Number(oldId), Number(newId));
                    for (let i = lowEnd; i <= highEnd; i++) {
                        highlightLine.push(`${dir}-${i}`);
                    }
                }
            }
            this.setState({
                highlightLine,
            });
        };
        this.syntaxHighlight = (str) => {
            if (!str)
                return;
            const language = P.highlight(str, P.languages.javascript);
            return _jsx("span", { dangerouslySetInnerHTML: { __html: language } });
        };
        this.state = {
            highlightLine: [],
            theme: 'dark',
            splitView: true,
            hideSummary: false,
            columnHeaders: true,
            lineNumbers: true,
            customGutter: false,
            enableSyntaxHighlighting: true,
            dataType: 'javascript',
            compareMethod: DiffMethod.CHARS,
            infiniteLoading: true,
            loadingElement: true,
            disableWorker: false,
        };
    }
    render() {
        let oldValue = '';
        let newValue = '';
        if (this.state.dataType === 'json') {
            oldValue = oldJson;
            newValue = newJson;
        }
        else if (this.state.dataType === 'javascript') {
            oldValue = oldJs;
            newValue = newJs;
        }
        else {
            oldValue = oldYaml;
            newValue = newYaml;
        }
        return (_jsxs("div", { className: "react-diff-viewer-example", children: [_jsx("div", { className: "radial" }), _jsxs("div", { className: "banner", children: [_jsx("div", { className: "img-container", children: _jsx("img", { src: logo, alt: "React Diff Viewer Logo" }) }), _jsxs("p", { children: ["A simple and beautiful text diff viewer made with", ' ', _jsxs("a", { href: "https://github.com/kpdecker/jsdiff", target: "_blank", children: ["Diff", ' '] }), "and", ' ', _jsxs("a", { href: "https://reactjs.org", target: "_blank", children: ["React.", ' '] }), "Featuring split view, inline view, word diff, line highlight and more."] }), _jsx("p", { children: "This documentation is for the `next` release branch, e.g. v4.x" }), _jsx("div", { className: "cta", children: _jsx("a", { href: "https://github.com/aeolun/react-diff-viewer-continued#install", children: _jsx("button", { type: "button", className: "btn btn-primary btn-lg", children: "Documentation" }) }) }), _jsxs("div", { className: "options", children: [_jsxs("div", { children: [_jsxs("label", { className: "switch", children: [_jsx("input", { type: "checkbox", checked: this.state.theme === 'dark', onChange: () => {
                                                        if (this.state.theme === 'dark') {
                                                            document.body.classList.add('light');
                                                        }
                                                        else {
                                                            document.body.classList.remove('light');
                                                        }
                                                        this.setState({
                                                            theme: this.state.theme === 'dark' ? 'light' : 'dark',
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Dark theme" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.splitView, onChange: () => {
                                                        this.setState({
                                                            splitView: !this.state.splitView,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Split pane" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.enableSyntaxHighlighting, onChange: () => {
                                                        this.setState({
                                                            enableSyntaxHighlighting: !this.state.enableSyntaxHighlighting,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Syntax highlighting" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: !this.state.hideSummary, onChange: () => {
                                                        this.setState({
                                                            hideSummary: !this.state.hideSummary,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Show Summary" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.columnHeaders, onChange: () => {
                                                        this.setState({
                                                            columnHeaders: !this.state.columnHeaders,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Column Headers" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.customGutter, onChange: () => {
                                                        this.setState({
                                                            customGutter: !this.state.customGutter,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Custom gutter" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.lineNumbers, onChange: () => {
                                                        this.setState({
                                                            lineNumbers: !this.state.lineNumbers,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Line Numbers" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.infiniteLoading, onChange: () => {
                                                        this.setState({
                                                            infiniteLoading: !this.state.infiniteLoading,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Infinite Loading" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.loadingElement, onChange: () => {
                                                        this.setState({
                                                            loadingElement: !this.state.loadingElement,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Show Loading Text" })] }), _jsxs("div", { children: [_jsxs("label", { className: 'switch', children: [_jsx("input", { type: "checkbox", checked: this.state.disableWorker, onChange: () => {
                                                        this.setState({
                                                            disableWorker: !this.state.disableWorker,
                                                        });
                                                    } }), _jsx("span", { className: "slider round" })] }), _jsx("span", { children: "Disable Worker" })] }), _jsxs("div", { children: [_jsx("label", { className: 'select', children: _jsxs("select", { value: this.state.dataType, onChange: (e) => {
                                                    const newDataType = e.currentTarget.value;
                                                    let newCompareMethod = this.state.compareMethod;
                                                    if (newDataType === 'json') {
                                                        newCompareMethod = DiffMethod.JSON;
                                                    }
                                                    else if (newDataType === 'yaml') {
                                                        newCompareMethod = DiffMethod.YAML;
                                                    }
                                                    else if (this.state.compareMethod === DiffMethod.JSON || this.state.compareMethod === DiffMethod.YAML) {
                                                        newCompareMethod = DiffMethod.CHARS;
                                                    }
                                                    this.setState({
                                                        dataType: newDataType,
                                                        compareMethod: newCompareMethod
                                                    });
                                                }, children: [_jsx("option", { children: "javascript" }), _jsx("option", { children: "json" }), _jsx("option", { children: "yaml" })] }) }), _jsx("span", { children: "Data" })] }), _jsxs("div", { children: [_jsx("label", { className: 'select', children: _jsxs("select", { value: this.state.compareMethod, onChange: (e) => {
                                                    this.setState({
                                                        compareMethod: e.currentTarget.value
                                                    });
                                                }, disabled: this.state.dataType === 'json' || this.state.dataType === 'yaml', children: [_jsx("option", { value: DiffMethod.CHARS, children: "Characters" }), _jsx("option", { value: DiffMethod.WORDS, children: "Words" }), _jsx("option", { value: DiffMethod.WORDS_WITH_SPACE, children: "Words with space" }), _jsx("option", { value: DiffMethod.LINES, children: "Lines" }), _jsx("option", { value: DiffMethod.TRIMMED_LINES, children: "Trimmed lines" }), _jsx("option", { value: DiffMethod.SENTENCES, children: "Sentences" }), _jsx("option", { value: DiffMethod.CSS, children: "CSS" }), _jsx("option", { value: DiffMethod.JSON, children: "JSON" }), _jsx("option", { value: DiffMethod.YAML, children: "YAML" })] }) }), _jsx("span", { children: "Diff method" })] })] })] }), _jsx("div", { className: "diff-viewer", children: _jsx(ReactDiff, { highlightLines: this.state.highlightLine, onLineNumberClick: this.onLineNumberClick, alwaysShowLines: ['L-30'], extraLinesSurroundingDiff: 1, hideLineNumbers: !this.state.lineNumbers, oldValue: oldValue, compareMethod: this.state.compareMethod, splitView: this.state.splitView, newValue: newValue, renderGutter: this.state.customGutter
                            ? (diffData) => {
                                return (_jsx("td", { className: diffData.type !== undefined
                                        ? cn(diffData.styles.gutter)
                                        : cn(diffData.styles.gutter, diffData.styles.emptyGutter, {}), title: 'extra info', children: _jsx("pre", { className: cn(diffData.styles.lineNumber, {}), children: diffData.type == 3
                                            ? 'CHG'
                                            : diffData.type == 2
                                                ? 'DEL'
                                                : diffData.type == 1
                                                    ? 'ADD'
                                                    : diffData.type
                                                        ? '==='
                                                        : undefined }) }));
                            }
                            : undefined, renderContent: this.state.enableSyntaxHighlighting
                            ? this.syntaxHighlight
                            : undefined, useDarkTheme: this.state.theme === 'dark', hideSummary: this.state.hideSummary, summary: this.state.compareMethod === DiffMethod.JSON ? 'package.json' : 'webpack.config.js', leftTitle: this.state.columnHeaders ? `master@2178133 - pushed 2 hours ago.` : undefined, rightTitle: this.state.columnHeaders ? `master@64207ee - pushed 13 hours ago.` : undefined, infiniteLoading: this.state.infiniteLoading ? {
                            pageSize: 20,
                            containerHeight: '70vh'
                        } : undefined, disableWorker: this.state.disableWorker, loadingElement: this.state.loadingElement ? (() => (_jsx("div", { style: {
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                zIndex: '1',
                                background: '#00000061'
                            }, children: _jsx("p", { style: { position: 'absolute', top: '50%', right: '50%', transform: 'translate(50%,-50%)', color: '#fff', fontSize: '16px', fontWeight: 'bold' }, children: "Loading diff..." }) }))) : undefined }) }), _jsxs("footer", { children: ["Originally made with \uD83D\uDC93 by", ' ', _jsx("a", { href: "https://praneshravi.in", target: "_blank", children: "Pranesh Ravi" }), ' ', "and extended by", ' ', _jsx("a", { href: "https://serial-experiments.com", target: "_blank", children: "Bart Riepe" })] })] }));
    }
}
const root = createRoot(document.getElementById('app'));
root.render(_jsx(Example, {}));
