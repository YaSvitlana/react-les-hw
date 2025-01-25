

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationComponent = ({currentPage, totalPages, onPageChange,}: PaginationProps) => {
    return (
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "left", gap: "10px" }}>
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
                disabled={currentPage === 0}
            >
                Prev
            </button>
            <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages - 1))}
                disabled={currentPage === totalPages - 1}
            >
                Next
            </button>
        </div>
    );
};

