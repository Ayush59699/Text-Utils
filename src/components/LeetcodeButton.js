import React from "react";
import styled from "styled-components";

const LeetcodeButton = () => {
  return (
    <StyledWrapper>

        <a href="https://leetcode.com/u/Ayush_21f3001194/" >
        <button className="btn">
        <svg
          width="20"
          height="20"
          fill="#0092E4"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="github"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      </button>  
        
        </a>
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
  display: grid;
  place-items: center;
  background: #e3edf7;
  padding: 1.4em;
  border-radius: 10px;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
	      -6px -6px 10px -1px rgba(255,255,255,0.7);
  border: 1px solid rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.5s;
}

.btn:hover {
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
	      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
	      -0.5px -0.5px 0px rgba(255,255,255,1),
	      0.5px 0.5px 0px rgba(0,0,0,0.15),
	      0px 12px 10px -10px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  transform: translateY(0.5em);
}

.btn svg {
  transition: transform 0.5s;
}

.btn:hover svg {
  transform: scale(0.9);
  fill: #333333;
}


`;

export default LeetcodeButton;

