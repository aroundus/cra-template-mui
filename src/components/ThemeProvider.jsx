import { colors } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { CssBaseline as CSSBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

/**
 * 사용자 정의 테마 Context API
 * @see https://mui.com/material-ui/customization/theming
 */
export function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={theme}>
      <CSSBaseline />
      {children}
    </MUIThemeProvider>
  );
}

const theme = createTheme(
  {
    shape: {
      borderRadius: 4,
    },
    spacing: 4,
    /**
     * 타이포그래피 사용자 정의
     * @requires public/index.html 파일에 사용자 정의 폰트 스타일시트 주소를 <link /> 태그로 연결하고 다음과 같이 폰트를 설정하면 브라우저에 사용자 정의 폰트를 적용할 수 있습니다.
     */
    typography: {
      fontFamily: 'Pretendard, -apple-system, sans-serif',
      fontSize: 14,
    },
    components: {
      /**
       * 스타일 사용자 정의
       * @description CSS 문법으로 작성합니다. SCSS의 중첩 구문을 사용할 수 있습니다.
       */
      MuiCssBaseline: {
        styleOverrides: `
          body {
            background-color: ${colors.common.white};
            color: ${colors.common.black};
            font-weight: 400;
            line-height: 1.4;
            overflow-wrap: break-word;
            word-break: keep-all;
            -webkit-font-smoothing: auto;
          }

          a {
            color: ${colors.common.black};
            transition: 0.2s;

            &:hover {
              color: ${colors.cyan[600]};
            }
          }

          table {
            margin: auto;
            border-collapse: collapse;

            th,
            td {
              padding: 4px 12px;
              border: 1px solid ${colors.grey[300]};
            }

            th {
              background-color: ${colors.grey[200]};
            }
          }
        `,
      },
      /**
       * 컴포넌트 사용자 정의
       * @description 사용자 정의를 원하는 MUI 컴포넌트 스타일의 속성을 구성합니다.
       */
      MuiButton: {
        defaultProps: {
          style: {
            textTransform: 'none', // FIXME: 영문을 대문자로 출력하는 문제
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {},
        },
      },
    },
    /**
     * 색상 사용자 정의
     *
     * @see https://mui.com/material-ui/customization/color
     * @see https://m2.material.io/inline-tools/color 원하는 사용자 정의 색상 조합을 구성하고 접근성 수준을 측정할 수 있습니다.
     */
    palette: {
      primary: {
        main: colors.common.black,
      },
      secondary: {
        main: colors.grey[500],
      },
    },
  },
  koKR,
);
