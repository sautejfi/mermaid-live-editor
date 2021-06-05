module.exports = {
  "Auto sync tests": {
    "should dim diagram when code is edited": {
      "1": "{\"code\":\"graph TD\\n    A[Christmas] -->|Get money| B(Go shopping)\\n    B --> C{Let me think}\\n    C -->|One| D[Laptop]\\n    C -->|Two| E[iPhone]\\n    C -->|Three| F[fa:fa-car Car]\\n    C --> Test\",\"mermaid\":\"{\\n  \\\"theme\\\": \\\"default\\\"\\n}\",\"updateEditor\":false,\"autoSync\":false,\"updateDiagram\":false}"
    },
    "should not dim diagram when code is in sync": {
      "1": "{\"code\":\"graph TD\\n    A[Christmas] -->|Get money| B(Go shopping)\\n    B --> C{Let me think}\\n    C -->|One| D[Laptop]\\n    C -->|Two| E[iPhone]\\n    C -->|Three| F[fa:fa-car Car]\\n    C --> Testing\",\"mermaid\":\"{\\n  \\\"theme\\\": \\\"default\\\"\\n}\",\"updateEditor\":false,\"autoSync\":true,\"updateDiagram\":false}"
    }
  },
  "Site Loads": {
    "Check Home page load": {
      "1": "{\"code\":\"graph TD\\n    A[Christmas] -->|Get money| B(Go shopping)\\n    B --> C{Let me think}\\n    C -->|One| D[Laptop]\\n    C -->|Two| E[iPhone]\\n    C -->|Three| F[fa:fa-car Car]\\n  \",\"mermaid\":\"{\\n  \\\"theme\\\": \\\"default\\\"\\n}\",\"updateEditor\":true,\"autoSync\":true,\"updateDiagram\":true}"
    },
    "Check Redirect from old URL": {
      "1": "{\"code\":\"graph TD\\n    A[Christmas] -->|Get money| B(Go shopping)\\n    B --> C{Let me think}\\n    C -->|One| D[Laptop]\\n    C -->|Two| E[iPhone]\\n    C -->|Three| F[fa:fa-car Car]\",\"mermaid\":\"{\\n  \\\"theme\\\": \\\"default\\\"\\n}\",\"updateEditor\":false,\"autoSync\":true,\"updateDiagram\":true}"
    },
    "should load diagram from gist": {
      "1": "{\"code\":\"graph TD\\n    A[Party] -->|Get money| B(Go shopping!!)\\n    \",\"mermaid\":\"{\\n  \\\"theme\\\": \\\"forest\\\",\\n  \\\"test\\\": \\\"hello world\\\"\\n}\",\"updateEditor\":false,\"autoSync\":true,\"updateDiagram\":true}"
    }
  },
  "__version": "7.4.0"
}