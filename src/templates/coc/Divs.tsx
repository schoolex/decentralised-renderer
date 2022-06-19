export const DivHor = ({
    children,
    style,
    onClick = () => {},
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: Function;
}) => (
    <span
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            ...style,
        }}
        onClick={() => onClick()}
    >
        {children}
    </span>
);

export const Div = ({
    children,
    style,
    onClick = () => {},
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: Function;
}) => (
    <span
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
            ...style,
        }}
        onClick={() => onClick()}
    >
        {children}
    </span>
);
