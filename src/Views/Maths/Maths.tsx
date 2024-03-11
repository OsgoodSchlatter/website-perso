import Latex from "react-latex-next";
import { Header } from "../../Single/Header";

export const Maths = () => {
  return (
    <>
      <Header name={"Calculus"} posts={0} />
      <div className="flex justify-center">
        <div className="mt-4">
          <div className="flex">
            <div className="font-bold mr-2">Fourier transform:</div>
            <Latex>
              {"$F(\\omega) =\\int_{-\\infty}^{\\infty} f(t)e^{-i\\omega t}dt$"}
            </Latex>
          </div>
          <div>
            Helps to go from temporal to frequency domain and vice-versa.
          </div>
          <div>
            Problem, it can only be done for function f that are integrable
            between <Latex>{"$[-\\infty ;\\infty]$"}</Latex>
          </div>
          <div>
            If we have a function <Latex>{"$x(t)=e^t$"}</Latex>, then{" "}
            <Latex>
              {
                "$\\int_{-\\infty}^{\\infty} e^te^{-i\\omega t}dt = \\int_{-\\infty}^{\\infty} e^{(-i\\omega+1) t}dt$"
              }
            </Latex>{" "}
            is hardly integrable (<Latex>{"$Re(1-i\\omega)=1>0$"}</Latex>).
          </div>
          <div className="mt-4 flex">
            <div className="font-bold mr-2">Laplace transform:</div>
            <Latex>{"$F(s) =\\int_{-\\infty}^{\\infty} f(t)e^{-st}dt $"}</Latex>
          </div>
          <div>
            With <Latex>{"$ s=\\sigma + i\\omega$"}</Latex>.
          </div>
          <div>
            Now we can integrate functions that are bounded by exponentials i.e.{" "}
            <Latex>{"$|f(t)| \\le Ae^{\\alpha t}, (A,\\alpha) \\in R $"}</Latex>{" "}
            if <Latex>{"$\\alpha \\lt \\sigma $"}</Latex>.
          </div>
          <div className="mt-4 flex">
            <div className="font-bold mr-2">Convolution:</div>
            <Latex>
              {
                "$(f * g)(t) =\\int_{-\\infty}^{\\infty} f(\\tau)g(t-\\tau)d\\tau $"
              }
            </Latex>
          </div>
          <div className="mt-4 flex">
            <div className="font-bold mr-2">
              Convolution of a Laplace transform:
            </div>
            <Latex>{"$L(f * g)(s) =F(s)G(s) $"}</Latex>
          </div>
          <div className=" mt-4">
            <div className="flex items-center">
              <div className="font-bold mr-2">Divergence:</div>
              <Latex>
                {`$$\\vec{\\nabla} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right)
                $$`}
              </Latex>
            </div>
            Divergence is, in short, a vectorial derivative. It can be applied
            to vectors:
            <div className="flex items-center">
              <div className="font-bold mr-2">
                <Latex>
                  {`$$ E \\rightarrow C;
                $$`}
                </Latex>
              </div>
              <Latex>
                {`$$ \\vec{\\nabla}.\\vec{F} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                .
                 \\left(
                  \\begin{array}{c}
                  Fx \\\\
                  Fy  \\\\
                  Fz \\\\
                  \\end{array}
                  \\right) 
                $$`}
              </Latex>
              <Latex>{`$$= \\frac{\\partial Fx}{\\partial x} + \\frac{\\partial Fy}{\\partial y} + \\frac{\\partial Fz}{\\partial z}$$`}</Latex>
            </div>
            Or to scalars:
            <div className="flex items-center">
              <div className="font-bold mr-2">
                <Latex>
                  {`$$ C \\rightarrow E;
                $$`}
                </Latex>
              </div>
              <Latex>
                {`$$\\vec{\\nabla} f = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                f 
                $$`}
              </Latex>
              <Latex>{`$$= \\left(
                \\begin{array}{c}
                \\frac{\\partial f}{\\partial x}  \\\\
                \\frac{\\partial f}{\\partial y}  \\\\
                \\frac{\\partial f}{\\partial z} \\\\
                \\end{array}
                \\right) $$`}</Latex>
            </div>
          </div>
          <div className=" mt-4">
            <div className="flex items-center">
              <div className="font-bold mr-2">Curl:</div>
              <Latex>
                {`$$ \\vec{\\nabla} x \\vec{F} = 
              \\left(
                \\begin{array}{c}
                \\frac{\\partial}{\\partial x}  \\\\
                \\frac{\\partial}{\\partial y}  \\\\
                \\frac{\\partial}{\\partial z} \\\\
                \\end{array}
                \\right) 
                x 
                \\left(
                  \\begin{array}{c}
                  Fx  \\\\
                  Fy  \\\\
                  Fz \\\\
                  \\end{array}
                  \\right) = \\left(
                    \\begin{array}{c}
                    \\frac{\\partial Fz}{\\partial y} - \\frac{\\partial Fy}{\\partial z} \\\\
                    - \\frac{\\partial Fz}{\\partial x} + \\frac{\\partial Fx}{\\partial z}  \\\\
                    \\frac{\\partial Fy}{\\partial x} -\\frac{\\partial Fx}{\\partial y}   \\\\
                    \\end{array}
                    \\right)   
                $$`}
              </Latex>
            </div>
          </div>
          <div className=" mt-4">
            <div className="flex items-center">
              <div className="font-bold mr-2">Green Ostrogradski theorem:</div>
              <Latex>
                {`$$ \\int_V{}^{} \\vec{\\nabla} . \\vec{F} dV =  \\int_S{}^{} \\vec{F} . \\vec{n} dS
                $$`}
              </Latex>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
